import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GradientBoldProps = Omit<IconBaseProps, 'children'>;

const GradientBold = memo(
  forwardRef<SVGSVGElement, GradientBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gradient-bold" {...props}>
      <path d="M7.56 14.93a1.51 1.51 0 1 1 0 3.03 1.51 1.51 0 0 1 0-3.03M14.2 15.29a1.16 1.16 0 1 1 0 2.31 1.16 1.16 0 0 1 0-2.31M11.05 12.89a1.34 1.34 0 1 1 0 2.67 1.34 1.34 0 0 1 0-2.67M16.98 13.24a.98.98 0 1 1 0 1.96.98.98 0 0 1 0-1.96M7.56 10.49a1.51 1.51 0 1 1 0 3.02 1.51 1.51 0 0 1 0-3.02M14.2 10.84a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32M11.05 8.44a1.34 1.34 0 1 1 0 2.67 1.34 1.34 0 0 1 0-2.67M16.98 8.8a.98.98 0 1 1 0 1.96.98.98 0 0 1 0-1.96M7.56 6.04a1.51 1.51 0 1 1 0 3.03 1.51 1.51 0 0 1 0-3.03M14.2 6.4a1.16 1.16 0 1 1 0 2.31 1.16 1.16 0 0 1 0-2.31" />
        <path fillRule="evenodd" d="M13.3 2.5q1.85-.02 3.04.06c.8.07 1.51.21 2.16.54a5.5 5.5 0 0 1 2.4 2.4c.33.65.47 1.35.54 2.16q.07 1.19.06 3.04v2.6q.02 1.85-.06 3.04c-.07.8-.21 1.51-.54 2.16a5.5 5.5 0 0 1-2.4 2.4c-.65.33-1.35.47-2.16.54q-1.19.07-3.04.06h-2.6q-1.85.02-3.04-.06a6 6 0 0 1-2.16-.54 5.5 5.5 0 0 1-2.4-2.4 6 6 0 0 1-.54-2.16q-.08-1.19-.06-3.04v-2.6q-.02-1.85.06-3.04c.07-.8.21-1.51.54-2.16a5.5 5.5 0 0 1 2.4-2.4 6 6 0 0 1 2.16-.54q1.19-.08 3.04-.06zm-2.6 2c-1.28 0-2.17 0-2.87.06a4 4 0 0 0-1.42.32 3.5 3.5 0 0 0-1.53 1.53 4 4 0 0 0-.32 1.42c-.06.7-.06 1.6-.06 2.87v2.6c0 1.28 0 2.17.06 2.87s.16 1.1.32 1.42c.34.66.87 1.2 1.53 1.53.32.16.73.27 1.42.32.7.06 1.6.06 2.87.06h2.6c1.28 0 2.17 0 2.87-.06a4 4 0 0 0 1.42-.32 3.5 3.5 0 0 0 1.53-1.53c.16-.32.27-.73.32-1.42.06-.7.06-1.6.06-2.87v-2.6c0-1.28 0-2.17-.06-2.87a4 4 0 0 0-.32-1.42 3.5 3.5 0 0 0-1.53-1.53 4 4 0 0 0-1.42-.32c-.7-.06-1.6-.06-2.87-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

GradientBold.displayName = 'GradientBold';

// Triple export pattern (lucide-react style)
export { GradientBold, GradientBold as GradientBoldIcon, GradientBold as SiGradientBold };
export default GradientBold;
export type { GradientBoldProps };
