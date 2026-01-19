import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanRegularDuotone = memo(
  forwardRef<SVGSVGElement, CanRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-duotone" {...props}>
      <path fill="currentColor" d="M17.86 4.74c.58 1.02.89 2.18.89 3.35v7.82c0 1.17-.3 2.33-.89 3.35l-.63 1.1a2.8 2.8 0 0 1-2.39 1.39H9.16c-.99 0-1.9-.53-2.39-1.39l-.63-1.1a7 7 0 0 1-.89-3.35V8.09c0-1.17.3-2.33.89-3.35l.57-.99h1.73l-1 1.74q-.68 1.22-.69 2.6v7.82q0 1.38.7 2.6l.63 1.11c.22.39.63.63 1.08.63h5.68c.45 0 .86-.24 1.08-.63l.64-1.1c.45-.8.69-1.7.69-2.61V8.09q0-1.38-.7-2.6l-.99-1.74h1.73z" opacity={.4} />
        <path fill="currentColor" d="M17.5 2.25a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CanRegularDuotone.displayName = 'CanRegularDuotone';

// Triple export pattern (lucide-react style)
export { CanRegularDuotone, CanRegularDuotone as CanRegularDuotoneIcon, CanRegularDuotone as SiCanRegularDuotone };
export type { CanRegularDuotoneProps };
