import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LightbulbOnFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LightbulbOnFillDuotone = memo(
  forwardRef<SVGSVGElement, LightbulbOnFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.34 8.41a1 1 0 0 1 1.23-.7l.96.25a1 1 0 1 1-.52 1.94l-.96-.26a1 1 0 0 1-.7-1.23M20.43 7.7a1 1 0 1 1 .52 1.94L20 9.9a1 1 0 0 1-.52-1.94zM4.93 3.93a1 1 0 0 1 1.41 0l.71.7a1 1 0 0 1-1.41 1.42l-.71-.7a1 1 0 0 1 0-1.42M17.66 3.93a1 1 0 0 1 1.41 1.41l-.7.71a1 1 0 0 1-1.42-1.41zM9.41 1.34a1 1 0 0 1 1.23.7l.25.97a1 1 0 1 1-1.93.52l-.26-.96a1 1 0 0 1 .71-1.23M13.36 2.05a1 1 0 0 1 1.94.52l-.26.96a1 1 0 1 1-1.93-.52z" />
        <path fill="currentColor" d="M15.25 19c0 .98-.51 1.83-1.28 2.32a2 2 0 0 1-3.94 0A2.7 2.7 0 0 1 8.75 19v-.25h6.5zM12 5.25a5.75 5.75 0 0 1 4.8 8.93c-.75 1.1-1.39 2.06-1.52 3.07H8.72c-.13-1-.77-1.96-1.51-3.07A5.75 5.75 0 0 1 12 5.25" />
    </IconBase>
  ))
);

LightbulbOnFillDuotone.displayName = 'LightbulbOnFillDuotone';

export { LightbulbOnFillDuotone };
export type { LightbulbOnFillDuotoneProps };
