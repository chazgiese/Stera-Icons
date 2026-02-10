import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbOnFillProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnFill = memo(
  forwardRef<SVGSVGElement, LightbulbOnFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-on-fill" {...props}>
      <path fill="currentColor" d="M15.03 18.41c0 .96-.52 1.79-1.29 2.23a1.79 1.79 0 0 1-3.48 0 2.6 2.6 0 0 1-1.3-2.23v-.95h6.07zM12 5.78a5.32 5.32 0 0 1 4.43 8.26q-.61.89-1.01 1.67H8.58q-.4-.78-1.01-1.67A5.32 5.32 0 0 1 12 5.78M3.2 8.74a.87.87 0 0 1 1.08-.61l.88.23a.88.88 0 1 1-.45 1.7l-.88-.24a.9.9 0 0 1-.62-1.08M19.72 8.13a.88.88 0 1 1 .45 1.69l-.88.23a.88.88 0 0 1-.45-1.69zM5.57 4.66a.87.87 0 0 1 1.23 0l.65.65A.88.88 0 0 1 6.2 6.55l-.64-.65a.87.87 0 0 1 0-1.24M17.2 4.66a.87.87 0 0 1 1.24 1.24l-.65.65a.88.88 0 0 1-1.24-1.24zM9.64 2.3a.9.9 0 0 1 1.08.63l.23.88a.87.87 0 1 1-1.69.45l-.24-.88a.9.9 0 0 1 .62-1.07M13.28 2.93a.88.88 0 0 1 1.7.45l-.24.88a.88.88 0 0 1-1.7-.45z" />
    </IconBase>
  ))
);

LightbulbOnFill.displayName = 'LightbulbOnFill';

// Triple export pattern (lucide-react style)
export { LightbulbOnFill, LightbulbOnFill as LightbulbOnFillIcon, LightbulbOnFill as SiLightbulbOnFill };
export default LightbulbOnFill;
export type { LightbulbOnFillProps };
