// Mock fetch globally
beforeAll(() => {
    global.fetch = jest.fn();
  });
  
  beforeEach(() => {
    // Reset mock before each test
    global.fetch.mockReset();
  });
  
  test('fetches and displays sorted tools', async () => {
    const mockData = [
      { name: 'Tool B', image: 'tool-b.png', description: 'Description B', link: 'http://toolb.com' },
      { name: 'Tool A', image: 'tool-a.png', description: 'Description A', link: 'http://toola.com' }
    ];
  
    // Mock the fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
  
    document.body.innerHTML = `
      <div class="content-area">
        <ul class="tool-list"></ul>
      </div>
    `;
  
    // Import your main file after setting up the DOM and mock
    require('./index.js'); 
  
    // Allow time for the fetch to resolve and DOM to update
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    // Check if fetch was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith('data/content.json');
  
    // Check if the tool list contains the sorted items
    const listItems = document.querySelectorAll('.tool-list li');
    expect(listItems.length).toBe(2);
    expect(listItems[0].querySelector('h3').textContent).toBe('Tool A');
    expect(listItems[1].querySelector('h3').textContent).toBe('Tool B');
  });
  
  test('handles fetch errors', async () => {
    // Mock the fetch response to reject
    global.fetch.mockRejectedValueOnce(new Error('Network error'));
  
    document.body.innerHTML = `
      <div class="content-area">
        <ul class="tool-list"></ul>
      </div>
    `;
  
    // Import your main file after setting up the DOM and mock
    require('./index.js'); 
  
    // Allow time for the fetch to resolve and DOM to update
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    // Verify no items are rendered due to the error
    const listItems = document.querySelectorAll('.tool-list li');
    expect(listItems.length).toBe(0);
  });
  