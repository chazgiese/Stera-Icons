import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderBoldDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-bold-duotone" {...props}>
      <path d="M12.43 19.5h-.93l-1.91-.01-5.08-5.08-.01-1.91v-.93zM17.53 18.94l-.21.12q-.15.09-.33.14c-.38.13-.87.21-1.61.26h-.16L4.54 8.78v-.16c.05-.74.13-1.23.26-1.61a3 3 0 0 1 .25-.54zM19.46 15.22v.16a6 6 0 0 1-.26 1.61 3 3 0 0 1-.26.54L6.47 5.05A4 4 0 0 1 7 4.8a6 6 0 0 1 1.61-.26h.16zM12.5 4.5h1.9l5.09 5.1.01 1.9v.93L11.57 4.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.5q2.05-.02 3.37.07c.9.07 1.65.23 2.35.58a6 6 0 0 1 2.63 2.63c.35.7.5 1.46.58 2.35q.09 1.32.07 3.37v1q.01 1.78-.05 3a8 8 0 0 1-.36 2.15q-.1.3-.24.57a6 6 0 0 1-3.2 2.87q-.95.31-2.16.36-1.2.06-2.99.05h-1q-2.05.02-3.37-.07a6 6 0 0 1-2.35-.58 6 6 0 0 1-2.63-2.63 6 6 0 0 1-.58-2.35q-.09-1.32-.07-3.37v-1q-.01-1.78.05-3 .05-1.19.36-2.15.1-.3.24-.57a6 6 0 0 1 3.2-2.87 8 8 0 0 1 2.16-.36q1.2-.06 2.99-.05zm-1 2c-1.22 0-2.14 0-2.88.04a6 6 0 0 0-1.61.26q-.18.05-.33.14A4 4 0 0 0 4.8 7c-.13.38-.21.87-.26 1.61-.04.74-.04 1.66-.04 2.88v1c0 1.42 0 2.42.06 3.2.07.77.19 1.25.38 1.62a4 4 0 0 0 1.74 1.74c.37.2.85.31 1.62.38.78.06 1.78.06 3.2.06h1c1.22 0 2.14 0 2.88-.04a6 6 0 0 0 1.61-.26q.18-.05.33-.14A4 4 0 0 0 19.2 17c.13-.38.21-.87.26-1.61.04-.74.04-1.66.04-2.88v-1c0-1.42 0-2.42-.06-3.2a4 4 0 0 0-.38-1.62 4 4 0 0 0-1.74-1.74c-.37-.2-.85-.31-1.62-.38-.78-.06-1.78-.06-3.2-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderBoldDuotone.displayName = 'SquarePlaceholderBoldDuotone';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderBoldDuotone, SquarePlaceholderBoldDuotone as SquarePlaceholderBoldDuotoneIcon, SquarePlaceholderBoldDuotone as SiSquarePlaceholderBoldDuotone };
export default SquarePlaceholderBoldDuotone;
export type { SquarePlaceholderBoldDuotoneProps };
