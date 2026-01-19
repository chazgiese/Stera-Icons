import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CanLabelRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CanLabelRegularDuotone = memo(
  forwardRef<SVGSVGElement, CanLabelRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="can-label-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.5 2.25a.75.75 0 0 1 0 1.5h-.2l.56 1c.58 1.01.89 2.17.89 3.34v7.82c0 1.17-.3 2.33-.89 3.35l-.63 1.1a2.8 2.8 0 0 1-2.39 1.39H9.16c-.99 0-1.9-.53-2.39-1.39l-.63-1.1a7 7 0 0 1-.89-3.35V8.09c0-1.17.3-2.33.89-3.35l.57-.99H6.5a.75.75 0 0 1 0-1.5zm-9.06 1.5-1 1.74q-.68 1.22-.69 2.6v7.82q0 1.38.7 2.6l.63 1.11c.22.39.63.63 1.08.63h5.68c.45 0 .86-.24 1.08-.63l.64-1.1c.45-.8.69-1.7.69-2.61V8.09q0-1.38-.7-2.6l-.99-1.74z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M17.24 16.25a5 5 0 0 1-.33 1.5H7.1q-.28-.73-.33-1.5zM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M16.91 6.25q.28.73.33 1.5H6.76q.05-.77.33-1.5z" />
    </IconBase>
  ))
);

CanLabelRegularDuotone.displayName = 'CanLabelRegularDuotone';

// Triple export pattern (lucide-react style)
export { CanLabelRegularDuotone, CanLabelRegularDuotone as CanLabelRegularDuotoneIcon, CanLabelRegularDuotone as SiCanLabelRegularDuotone };
export type { CanLabelRegularDuotoneProps };
