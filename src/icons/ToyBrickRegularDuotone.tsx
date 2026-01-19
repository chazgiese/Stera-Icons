import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToyBrickRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ToyBrickRegularDuotone = memo(
  forwardRef<SVGSVGElement, ToyBrickRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="toy-brick-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 8.25A2.75 2.75 0 0 1 20.75 11v6A2.75 2.75 0 0 1 18 19.75H6A2.75 2.75 0 0 1 3.25 17v-6A2.75 2.75 0 0 1 6 8.25zM6 9.75c-.69 0-1.25.56-1.25 1.25v6c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-6c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.5 6.25a.5.5 0 0 0-.5.5v1.5q-.84 0-1.5.45V6.75c0-1.1.9-2 2-2H9a2 2 0 0 1 2 2v1.5H9.5v-1.5a.5.5 0 0 0-.5-.5zM15 6.25a.5.5 0 0 0-.5.5v1.5H13v-1.5c0-1.1.9-2 2-2h2.5a2 2 0 0 1 2 2V8.7a2.7 2.7 0 0 0-1.5-.45v-1.5a.5.5 0 0 0-.5-.5z" />
    </IconBase>
  ))
);

ToyBrickRegularDuotone.displayName = 'ToyBrickRegularDuotone';

// Triple export pattern (lucide-react style)
export { ToyBrickRegularDuotone, ToyBrickRegularDuotone as ToyBrickRegularDuotoneIcon, ToyBrickRegularDuotone as SiToyBrickRegularDuotone };
export type { ToyBrickRegularDuotoneProps };
