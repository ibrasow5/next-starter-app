export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const customers = await fetch('http://localhost:8081/api/customers')
          .then((response) => response.json());
  
        res.status(200).json(customers);
      } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des clients' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }