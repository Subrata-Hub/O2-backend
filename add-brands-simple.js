const brands = [
  'Atom',
  'True basics', 
  'Nakpro',
  'Cloma pharma',
  'Centrum',
  'Condemned',
  'Musclemeds',
  'Ultimate nutrition',
  'Universal',
  'Fa ice hydro',
  'ANDROPIQUE'
]

async function addBrands() {
  const API_BASE = 'http://localhost:3001/api'
  
  for (const brandName of brands) {
    try {
      const response = await fetch(`${API_BASE}/brands`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: brandName,
          description: `${brandName} brand products`
        })
      })
      
      if (response.ok) {
        console.log(`Added brand: ${brandName}`)
      } else {
        console.log(`Failed to add brand: ${brandName}`)
      }
    } catch (error) {
      console.error(`Error adding ${brandName}:`, error.message)
    }
  }
  
  console.log('Finished adding brands!')
}

addBrands()