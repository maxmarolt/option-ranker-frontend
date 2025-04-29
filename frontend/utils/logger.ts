export function logBetaEvent(event: string, details: object = {}) {
    const betaId = localStorage.getItem('beta_id') || 'unknown';
    
    fetch('https://script.google.com/macros/s/AKfycbxAWC-st3yofZGUgUij1s4P9fHG3FcKVzCISrYM4RtvO_7M6Sdq0GsKG_dTUwmaVi-5og/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        beta_id: betaId,
        event: event,
        details: JSON.stringify(details),
      }),
    }).catch((err) => console.error('Logging error:', err));
  }
  