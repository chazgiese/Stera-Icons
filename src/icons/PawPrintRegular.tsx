import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PawPrintRegularProps = Omit<IconBaseProps, 'children'>;

const PawPrintRegular = memo(
  forwardRef<SVGSVGElement, PawPrintRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="paw-print" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 9.75c1.23 0 2.1.32 2.74.88.61.53.94 1.23 1.2 1.76q.14.29.57.78l.92 1.1c.6.75 1.32 1.77 1.32 2.9a3.89 3.89 0 0 1-4.02 4.08c-.69 0-1.26-.15-1.7-.28-.5-.14-.77-.22-1.03-.22s-.54.08-1.02.22c-.45.13-1.02.28-1.7.28-1.3 0-2.33-.5-3.03-1.3-.68-.78-1-1.8-1-2.78 0-1.13.72-2.15 1.32-2.9l.92-1.1q.43-.5.56-.78c.27-.53.6-1.23 1.2-1.76A4 4 0 0 1 12 9.75m0 1.5c-.95 0-1.45.24-1.76.51-.34.3-.56.71-.84 1.3-.18.36-.47.73-.75 1.07-.31.37-.6.7-.9 1.08-.63.77-1 1.41-1 1.96 0 .67.22 1.32.63 1.8.4.45 1.01.78 1.9.78.46 0 .86-.1 1.29-.22.39-.11.9-.28 1.43-.28s1.04.17 1.43.28c.43.12.83.22 1.3.22.88 0 1.49-.33 1.89-.79s.63-1.12.63-1.8c0-.54-.37-1.18-1-1.95-.3-.39-.59-.7-.9-1.08a6 6 0 0 1-.75-1.08c-.28-.58-.5-.99-.84-1.29-.31-.27-.8-.51-1.76-.51M4 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M20 7.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M8.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M15.5 2.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" />
    </IconBase>
  ))
);

PawPrintRegular.displayName = 'PawPrintRegular';

// Triple export pattern (lucide-react style)
export { PawPrintRegular, PawPrintRegular as PawPrintRegularIcon, PawPrintRegular as SiPawPrintRegular };
export default PawPrintRegular;
export type { PawPrintRegularProps };
