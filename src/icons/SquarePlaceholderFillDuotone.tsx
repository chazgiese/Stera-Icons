import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderFillDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="square-placeholder-fill-duotone" {...props}>
      <path d="m15.5 19.57-.11.01c-.75.04-1.67.05-2.89.05h-.12l-8-8v-.13c0-1.22 0-2.14.04-2.89V8.5zM9.9 19.62q-.95 0-1.61-.06a4 4 0 0 1-1.66-.38 4 4 0 0 1-1.8-1.8c-.2-.4-.33-.89-.39-1.67q-.05-.67-.06-1.6zM19.1 17.5a4 4 0 0 1-1.6 1.6L4.9 6.5q.57-1.03 1.59-1.6zM11.62 4.38l8 8v.12c0 1.22 0 2.14-.04 2.89v.12L8.48 4.43l.12-.01a55 55 0 0 1 2.89-.04zM14.1 4.38q.95 0 1.61.06c.78.06 1.27.19 1.66.38.78.4 1.41 1.03 1.8 1.8.2.4.33.89.39 1.67q.05.67.06 1.6z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1q.01 1.79-.04 2.99a8 8 0 0 1-.36 2.12q-.09.29-.24.56a6 6 0 0 1-3.13 2.8 8 8 0 0 1-2.11.36q-1.2.06-2.99.05h-1c-1.39 0-2.48 0-3.36-.08a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1q-.01-1.79.05-2.99c.05-.8.14-1.5.36-2.11q.09-.3.24-.57a6 6 0 0 1 3.12-2.8 8 8 0 0 1 2.12-.36q1.2-.06 2.99-.04zM4.42 8.6c-.04.75-.04 1.67-.04 2.89v.12l8 8h.12c1.22 0 2.14 0 2.89-.04h.12L4.43 8.48zm-.04 5.5q0 .94.06 1.6c.06.78.19 1.27.38 1.66.4.78 1.03 1.41 1.8 1.8.4.2.89.33 1.67.39q.67.05 1.6.06zM6.5 4.9q-1.02.57-1.6 1.6l12.62 12.6a4 4 0 0 0 1.59-1.6zm5.01-.53c-1.22 0-2.14 0-2.89.05H8.5l11.08 11.09.01-.12c.04-.75.05-1.67.05-2.89v-.12l-8-8zm8.12 5.52q0-.94-.06-1.6a4 4 0 0 0-.38-1.66 4 4 0 0 0-1.8-1.8c-.4-.2-.89-.33-1.67-.39q-.67-.05-1.6-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderFillDuotone.displayName = 'SquarePlaceholderFillDuotone';

// Triple export pattern (lucide-react style)
export { SquarePlaceholderFillDuotone, SquarePlaceholderFillDuotone as SquarePlaceholderFillDuotoneIcon, SquarePlaceholderFillDuotone as SiSquarePlaceholderFillDuotone };
export default SquarePlaceholderFillDuotone;
export type { SquarePlaceholderFillDuotoneProps };
