import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeDashRegularProps = Omit<IconBaseProps, 'children'>;

const CubeDashRegular = memo(
  forwardRef<SVGSVGElement, CubeDashRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cube-dash" {...props}>
      <path fill="currentColor" d="M12 18.12c.41 0 .75.34.75.75v1.85l1.14-.63a.75.75 0 0 1 .72 1.31l-1.27.72c-.83.46-1.85.46-2.68 0L9.4 21.4a.75.75 0 0 1 .72-1.3l1.14.62v-1.85c0-.41.34-.75.75-.75M3 13.75c.41 0 .75.34.75.75v1.32c0 .46.25.88.64 1.1l1.22.67a.75.75 0 0 1-.72 1.31l-1.23-.67a2.8 2.8 0 0 1-1.41-2.4V14.5c0-.41.34-.75.75-.75M21 13.75c.41 0 .75.34.75.75v1.32c0 1-.54 1.92-1.41 2.4l-1.23.68a.75.75 0 1 1-.72-1.3l1.22-.68c.4-.22.64-.64.64-1.1V14.5c0-.41.34-.75.75-.75M14.45 9.78a.75.75 0 0 1 .73 1.31l-2.43 1.35v2.68a.75.75 0 1 1-1.5 0v-2.68L8.82 11.1a.75.75 0 0 1 .73-1.3L12 11.13zM4.89 5.1a.75.75 0 0 1 .72 1.3L4.54 7l1.64.9a.75.75 0 0 1-.73 1.32l-1.7-.95V9.5a.75.75 0 0 1-1.5 0V8.18c0-1 .54-1.92 1.41-2.4zM18.1 5.39c.2-.37.65-.5 1.01-.3l1.23.68c.87.49 1.41 1.4 1.41 2.4V9.5a.75.75 0 0 1-1.5 0V8.27l-1.7.95a.75.75 0 1 1-.73-1.31L19.46 7l-1.07-.6a.75.75 0 0 1-.3-1.01M10.66 1.88a2.8 2.8 0 0 1 2.68 0l1.27.71a.75.75 0 0 1-.72 1.31l-1.28-.7a1.3 1.3 0 0 0-1.22 0l-1.28.7a.75.75 0 1 1-.72-1.3z" />
    </IconBase>
  ))
);

CubeDashRegular.displayName = 'CubeDashRegular';

// Triple export pattern (lucide-react style)
export { CubeDashRegular, CubeDashRegular as CubeDashRegularIcon, CubeDashRegular as SiCubeDashRegular };
export default CubeDashRegular;
export type { CubeDashRegularProps };
