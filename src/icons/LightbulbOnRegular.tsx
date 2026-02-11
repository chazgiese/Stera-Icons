import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbOnRegularProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnRegular = memo(
  forwardRef<SVGSVGElement, LightbulbOnRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-on" {...props}>
      <path fillRule="evenodd" d="M12 5.78a5.32 5.32 0 0 1 4.43 8.26c-.76 1.15-1.4 2.1-1.4 3.13v1.24c0 1.02-.58 1.9-1.44 2.31a1.66 1.66 0 0 1-3.18 0 2.6 2.6 0 0 1-1.45-2.3v-1.25c0-1.04-.63-1.98-1.4-3.13A5.32 5.32 0 0 1 12 5.78M10.46 18.4c0 .6.49 1.08 1.08 1.08h.92c.6 0 1.07-.48 1.07-1.08v-1.08h-3.07zM12 7.28a3.82 3.82 0 0 0-3.18 5.93c.48.72 1.1 1.61 1.42 2.62h3.52c.32-1.01.94-1.9 1.42-2.62q.62-.92.64-2.11A3.8 3.8 0 0 0 12 7.28" clipRule="evenodd" />
        <path d="M3.33 8.78c.1-.4.52-.64.92-.53l.88.23a.75.75 0 0 1-.39 1.45l-.88-.23a.75.75 0 0 1-.53-.92M19.75 8.25a.75.75 0 0 1 .39 1.45l-.88.23a.75.75 0 0 1-.4-1.45zM5.65 4.75c.3-.29.77-.29 1.06 0l.65.65A.75.75 0 0 1 6.3 6.46l-.65-.65a.75.75 0 0 1 0-1.06M17.29 4.75a.75.75 0 1 1 1.06 1.06l-.65.65a.75.75 0 0 1-1.06-1.06zM9.68 2.43c.4-.1.8.13.91.53l.24.88a.75.75 0 1 1-1.45.39l-.23-.88c-.11-.4.13-.81.53-.92M13.4 2.96a.75.75 0 0 1 1.45.39l-.23.88a.75.75 0 0 1-1.45-.39z" />
    </IconBase>
  ))
);

LightbulbOnRegular.displayName = 'LightbulbOnRegular';

// Triple export pattern (lucide-react style)
export { LightbulbOnRegular, LightbulbOnRegular as LightbulbOnRegularIcon, LightbulbOnRegular as SiLightbulbOnRegular };
export default LightbulbOnRegular;
export type { LightbulbOnRegularProps };
