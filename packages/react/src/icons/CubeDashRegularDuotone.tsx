import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CubeDashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubeDashRegularDuotone = memo(
  forwardRef<SVGSVGElement, CubeDashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.13c.41 0 .75.33.75.75v1.84l1.14-.63a.75.75 0 0 1 .72 1.32l-1.27.7c-.83.47-1.85.47-2.68 0l-1.27-.7a.75.75 0 0 1 .72-1.32l1.14.63v-1.84c0-.42.34-.75.75-.75M4.89 5.1a.75.75 0 1 1 .72 1.3L4.54 7l1.64.9a.75.75 0 0 1-.73 1.32l-1.7-.95V9.5a.75.75 0 0 1-1.5 0V8.18c0-1 .54-1.92 1.41-2.4zM18.1 5.39c.2-.37.65-.5 1.01-.3l1.23.68c.87.49 1.41 1.4 1.41 2.4V9.5a.75.75 0 0 1-1.5 0V8.27l-1.7.95a.75.75 0 0 1-.73-1.31L19.46 7l-1.07-.6a.75.75 0 0 1-.3-1.01" opacity={0.4} />
        <path fill="currentColor" d="M3 13.75c.41 0 .75.34.75.75v1.32c0 .46.25.88.64 1.1l1.22.67a.75.75 0 0 1-.72 1.32l-1.23-.68a2.8 2.8 0 0 1-1.41-2.4V14.5c0-.41.34-.75.75-.75M21 13.75c.41 0 .75.34.75.75v1.32c0 1-.54 1.92-1.41 2.4l-1.23.69a.75.75 0 0 1-.72-1.32l1.22-.67c.4-.22.64-.64.64-1.1V14.5c0-.41.34-.75.75-.75M14.45 9.78a.75.75 0 0 1 .73 1.31l-2.43 1.35v2.68a.75.75 0 0 1-1.5 0v-2.68L8.82 11.1a.75.75 0 0 1 .73-1.3L12 11.13zM10.66 1.88a2.8 2.8 0 0 1 2.68 0l1.27.71a.75.75 0 0 1-.72 1.32l-1.28-.72a1.3 1.3 0 0 0-1.22 0l-1.28.72a.75.75 0 0 1-.72-1.32z" />
    </IconBase>
  ))
);

CubeDashRegularDuotone.displayName = 'CubeDashRegularDuotone';

// Triple export pattern (lucide-react style)
export { CubeDashRegularDuotone, CubeDashRegularDuotone as CubeDashRegularDuotoneIcon, CubeDashRegularDuotone as SiCubeDashRegularDuotone };
export type { CubeDashRegularDuotoneProps };
