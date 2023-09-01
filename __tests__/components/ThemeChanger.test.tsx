import { render, screen } from '@testing-library/react';
import { Theme } from '@radix-ui/themes';
import ThemeChanger from '@/components/ThemeChanger';

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe('Home', () => {
  it('renders System', () => {
    render(
      <Theme>
        <ThemeChanger />
      </Theme>
    );

    const item = screen.getByText('System');

    expect(item).toBeInTheDocument();
  });
});
