import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';
import { Theme } from '@radix-ui/themes';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <Theme>
        <Home />
      </Theme>
    );

    const heading = screen.getByRole('heading', {
      name: /welcome!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
