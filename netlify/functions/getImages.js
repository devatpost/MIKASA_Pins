import neo4j from 'neo4j-driver';

export const handler = async (event) => {
  try {
    // Parse query parameters
    const { furniture_type, material_type } = event.queryStringParameters || {};
    // console.log(furniture_type,material_type);

    // Connect to Neo4j
    const driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
    );
    const session = driver.session();

    // Construct the query dynamically
    let query = `
      MATCH (i:Image)-[r:HAS_CONFIGURATION]->(c:Configuration)
      MATCH (c)-[:HAS_MATERIAL]->(m:Material)
      WHERE 1=1
    `;

    const params = {};

    if (furniture_type) {
      query += ` AND r.furniture_type = $furniture_type`;
      params.furniture_type = furniture_type;
    }

    if (material_type && material_type !== 'all') {
      query += ` AND m.material_type = $material_type`;
      params.material_type = material_type;
    }

    query += ` RETURN i.name AS name, i.url AS url`;

    // Execute query
    const result = await session.run(query, params);

    const images = result.records.map(record => ({
      title: record.get('name'),
      img: record.get('url')
    }));

    await session.close();
    await driver.close();

    return {
      statusCode: 200,
      body: JSON.stringify(images)
    };

  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
