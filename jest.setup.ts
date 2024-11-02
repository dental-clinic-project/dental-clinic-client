// jest.setup.ts
import "@testing-library/jest-dom";

// jest.setup.ts
import "swiper/css";
import "swiper/css/navigation";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);
// Mock for IntersectionObserver
class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {
    // You can implement logic here if needed
  }

  unobserve() {
    // You can implement logic here if needed
  }

  disconnect() {
    // You can implement logic here if needed
  }
}

// Set the global IntersectionObserver to the mock
global.IntersectionObserver = IntersectionObserver;
