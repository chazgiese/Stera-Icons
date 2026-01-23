import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BarricadeFillProps = Omit<IconBaseProps, 'children'>;

const BarricadeFill = memo(
  forwardRef<SVGSVGElement, BarricadeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="barricade-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.8 5q.81 0 1.4.03c.4.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v2.6q0 .81-.03 1.4a3 3 0 0 1-.47 1.45v.06l-.02-.02a3 3 0 0 1-1.12.98c-.38.2-.77.27-1.16.3q-.51.04-1.2.03v4a1 1 0 1 1-2 0v-4H7v4a1 1 0 1 1-2 0v-4q-.69 0-1.2-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17Q.99 12.6 1 11.8V9.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 4.99 5.2 5zM3 9.2v2.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h3.3L3 8.5zM15.5 14h3.3c.58 0 .95 0 1.23-.02.27-.03.37-.06.42-.09a1 1 0 0 0 .44-.44 1 1 0 0 0 .07-.28L14.79 7H8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BarricadeFill.displayName = 'BarricadeFill';

// Triple export pattern (lucide-react style)
export { BarricadeFill, BarricadeFill as BarricadeFillIcon, BarricadeFill as SiBarricadeFill };
export default BarricadeFill;
export type { BarricadeFillProps };
