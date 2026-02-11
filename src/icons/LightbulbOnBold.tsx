import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LightbulbOnBoldProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnBold = memo(
  forwardRef<SVGSVGElement, LightbulbOnBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="lightbulb-on-bold" {...props}>
      <path fillRule="evenodd" d="M12 5.38a5.57 5.57 0 0 1 4.64 8.65c-.78 1.17-1.36 2.04-1.36 2.98v1.25c0 1.08-.6 2.01-1.49 2.49a1.91 1.91 0 0 1-3.58 0 2.8 2.8 0 0 1-1.5-2.5v-1.24c0-.94-.57-1.82-1.35-2.98A5.57 5.57 0 0 1 12 5.38m-1.29 12.88c0 .45.37.83.83.83h.92c.45 0 .82-.38.82-.83v-.83h-2.57zM12 7.38a3.57 3.57 0 0 0-2.98 5.54c.45.67 1.05 1.52 1.4 2.5h3.16c.35-.98.95-1.83 1.4-2.5q.57-.87.59-1.97c0-1.98-1.6-3.57-3.57-3.57" clipRule="evenodd" />
        <path d="M3.09 8.56a1 1 0 0 1 1.22-.7l.89.23a1 1 0 0 1-.52 1.93l-.88-.24a1 1 0 0 1-.71-1.22M19.69 7.85a1 1 0 0 1 .52 1.93l-.89.24a1 1 0 0 1-.52-1.93zM5.48 4.42a1 1 0 0 1 1.41 0l.65.65a1 1 0 0 1-1.42 1.41l-.64-.64a1 1 0 0 1 0-1.42M17.11 4.42a1 1 0 1 1 1.42 1.42l-.65.64a1 1 0 0 1-1.42-1.41zM9.61 2.03a1 1 0 0 1 1.23.71l.23.88a1 1 0 1 1-1.93.52l-.24-.88a1 1 0 0 1 .71-1.23M13.16 2.74a1 1 0 0 1 1.94.52l-.24.88a1 1 0 0 1-1.93-.52z" />
    </IconBase>
  ))
);

LightbulbOnBold.displayName = 'LightbulbOnBold';

// Triple export pattern (lucide-react style)
export { LightbulbOnBold, LightbulbOnBold as LightbulbOnBoldIcon, LightbulbOnBold as SiLightbulbOnBold };
export default LightbulbOnBold;
export type { LightbulbOnBoldProps };
