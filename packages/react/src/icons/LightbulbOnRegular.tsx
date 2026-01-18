import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbOnRegularProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnRegular = memo(
  forwardRef<SVGSVGElement, LightbulbOnRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 5.25a5.75 5.75 0 0 1 4.8 8.93c-.84 1.25-1.55 2.3-1.55 3.46V19c0 1.1-.64 2.04-1.57 2.48a1.75 1.75 0 0 1-3.36 0A2.8 2.8 0 0 1 8.75 19v-1.36c0-1.16-.71-2.21-1.54-3.46A5.75 5.75 0 0 1 12 5.25M10.25 19c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1.25h-3.5zM12 6.75a4.25 4.25 0 0 0-3.54 6.6c.53.8 1.22 1.79 1.57 2.9h3.94c.35-1.11 1.03-2.1 1.57-2.9A4.25 4.25 0 0 0 12 6.75" clipRule="evenodd" />
        <path fill="currentColor" d="M2.58 8.48c.11-.4.52-.64.92-.53l.97.25a.75.75 0 0 1-.4 1.45l-.96-.25a.75.75 0 0 1-.53-.92M20.5 7.95a.75.75 0 0 1 .39 1.45l-.97.25a.75.75 0 0 1-.39-1.45zM5.1 4.1c.3-.29.77-.29 1.07 0l.7.71a.75.75 0 1 1-1.06 1.06l-.7-.7a.75.75 0 0 1 0-1.06M17.83 4.1a.75.75 0 1 1 1.07 1.07l-.71.7a.75.75 0 0 1-1.06-1.06zM9.48 1.58c.4-.1.8.13.91.53l.26.97a.75.75 0 1 1-1.45.39l-.25-.97c-.11-.4.13-.81.53-.92M13.6 2.11a.75.75 0 1 1 1.45.4l-.25.96a.75.75 0 0 1-1.45-.4z" />
    </IconBase>
  ))
);

LightbulbOnRegular.displayName = 'LightbulbOnRegular';

export { LightbulbOnRegular };
export type { LightbulbOnRegularProps };
