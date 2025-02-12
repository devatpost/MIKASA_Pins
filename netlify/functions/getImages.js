import neo4j from 'neo4j-driver';

export const handler = async () => {
  try {
    // Connect to Neo4j
    const driver = neo4j.driver(
      process.env.NEO4J_URI,
      neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
    );
    const session = driver.session();

    // Query the database
    const result = await session.run(
      `MATCH (i:Image)-[r:HAS_CONFIGURATION]->(c:Configuration) RETURN i.name AS name, i.url AS url`
    );

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
