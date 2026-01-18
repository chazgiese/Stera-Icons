import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbOnBoldProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnBold = memo(
  forwardRef<SVGSVGElement, LightbulbOnBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 5a6 6 0 0 1 5 9.32c-.85 1.27-1.5 2.26-1.5 3.32V19a3 3 0 0 1-1.61 2.66 2 2 0 0 1-3.78 0A3 3 0 0 1 8.5 19v-1.36c0-1.07-.66-2.05-1.5-3.32A6 6 0 0 1 12 5m-1.5 14a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h-3zM12 7a4 4 0 0 0-3.33 6.21c.5.75 1.16 1.7 1.54 2.79h3.58c.38-1.1 1.04-2.04 1.54-2.79A4 4 0 0 0 12 7" clipRule="evenodd" />
        <path fill="currentColor" d="M2.34 8.41a1 1 0 0 1 1.23-.7l.96.25a1 1 0 1 1-.52 1.94l-.96-.26a1 1 0 0 1-.7-1.23M20.43 7.7a1 1 0 1 1 .52 1.94L20 9.9a1 1 0 0 1-.52-1.94zM4.93 3.93a1 1 0 0 1 1.41 0l.71.7a1 1 0 0 1-1.41 1.42l-.71-.7a1 1 0 0 1 0-1.42M17.66 3.93a1 1 0 0 1 1.41 1.41l-.7.71a1 1 0 0 1-1.42-1.41zM9.41 1.34a1 1 0 0 1 1.23.7l.25.97a1 1 0 1 1-1.93.52l-.26-.96a1 1 0 0 1 .71-1.23M13.36 2.05a1 1 0 0 1 1.94.52l-.26.96a1 1 0 1 1-1.93-.52z" />
    </IconBase>
  ))
);

LightbulbOnBold.displayName = 'LightbulbOnBold';

export { LightbulbOnBold };
export type { LightbulbOnBoldProps };
