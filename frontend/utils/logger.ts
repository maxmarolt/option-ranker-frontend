export async function logBetaEvent(event: string, details: object = {}) {
    const urlParams = new URLSearchParams(window.location.search);
    const beta_id = urlParams.get('beta_id') || 'unknown';
  
    const payload = {
      beta_id,
      event,
      details
    };
  
    try {
      await fetch('https://option-ranker-backend-production.up.railway.app/log-beta-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Logging error:', error);
    }
  }
  