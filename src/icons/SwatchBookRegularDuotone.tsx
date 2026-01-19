import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SwatchBookRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SwatchBookRegularDuotone = memo(
  forwardRef<SVGSVGElement, SwatchBookRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="swatch-book-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.13 5.16a2.75 2.75 0 0 1 3.89 0l2.82 2.82a2.75 2.75 0 0 1 0 3.9l-.37.37H19A2.75 2.75 0 0 1 21.75 15v4A2.75 2.75 0 0 1 19 21.75H6.79 7A4.75 4.75 0 0 0 11.75 17v-.15l6.03-6.04c.5-.49.5-1.28 0-1.76l-2.82-2.83a1.25 1.25 0 0 0-1.77 0l-1.44 1.43V5.53zm-1.66 15.09H19c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25h-2.03z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M9 2.25A2.75 2.75 0 0 1 11.75 5v12a4.75 4.75 0 1 1-9.5 0V5A2.75 2.75 0 0 1 5 2.25zm-4 1.5c-.69 0-1.25.56-1.25 1.25v12a3.25 3.25 0 0 0 6.5 0V5c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

SwatchBookRegularDuotone.displayName = 'SwatchBookRegularDuotone';

// Triple export pattern (lucide-react style)
export { SwatchBookRegularDuotone, SwatchBookRegularDuotone as SwatchBookRegularDuotoneIcon, SwatchBookRegularDuotone as SiSwatchBookRegularDuotone };
export type { SwatchBookRegularDuotoneProps };
