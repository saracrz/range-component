import { Range } from './Range.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

class ResizeObserver {
    observe() { }
    disconnect() { }
}

describe('Range component', () => {
    describe('given the component and it props', () => {
     
        beforeEach(() => {
            window.ResizeObserver = ResizeObserver;
            render(<Range />)
        })

        it('should render correctly the default values of the slider', () => {
            expect(screen.getByText('0')).toBeInTheDocument();
            expect(screen.getByText('100')).toBeInTheDocument()
        });
    })
})

