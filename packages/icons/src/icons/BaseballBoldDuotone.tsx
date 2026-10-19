import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BaseballBoldDuotone = memo(
  forwardRef<SVGSVGElement, BaseballBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.6 11.6c.12-.54.66-.87 1.2-.75q.31.08.64.13.12 1 0 2l-.26-.01q-.43-.07-.85-.17c-.54-.13-.87-.67-.74-1.2M10.85 19.8c-.13-.54.2-1.08.74-1.2.54-.14 1.08.2 1.2.73q.1.42.18.85v.26q-1 .12-1.99 0zM9.38 16.6c-.32-.44-.22-1.06.23-1.39.44-.32 1.07-.22 1.4.22l.47.72c.29.47.14 1.09-.33 1.38s-1.09.14-1.37-.34q-.2-.3-.4-.58M15.21 9.6c.33-.44.95-.54 1.4-.22l.29.2.3.2c.47.28.62.9.33 1.37-.3.47-.9.62-1.38.33l-.36-.23-.36-.25c-.44-.32-.54-.95-.22-1.4M6.47 12.85c.3-.47.9-.62 1.38-.33l.36.23.36.25c.44.32.54.95.22 1.4s-.95.54-1.4.22l-.29-.2-.3-.2c-.47-.28-.62-.9-.33-1.37M12.52 7.85c-.29-.47-.14-1.09.33-1.38s1.09-.14 1.37.33l.4.6c.32.44.22 1.06-.22 1.39-.45.32-1.08.22-1.4-.22zM11.03 3.56q1-.12 1.99 0l.13.64c.13.54-.2 1.08-.74 1.2-.54.14-1.08-.2-1.2-.73q-.1-.42-.17-.85-.03-.14-.01-.26M3.56 11.03h.26q.43.07.85.17c.54.13.87.67.74 1.2-.13.54-.67.87-1.2.75q-.33-.09-.65-.13-.12-1 0-2" opacity={0.4} />
        <path fillRule="evenodd" d="M4.58 4.58c4.1-4.1 10.75-4.1 14.85 0s4.1 10.74 0 14.84-10.75 4.1-14.85 0-4.1-10.74 0-14.84m1.41 1.41c-3.32 3.32-3.32 8.7 0 12.02s8.7 3.32 12.02 0 3.32-8.7 0-12.02-8.7-3.32-12.02 0" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballBoldDuotone.displayName = 'BaseballBoldDuotone';

// Triple export pattern
export { BaseballBoldDuotone, BaseballBoldDuotone as BaseballBoldDuotoneIcon, BaseballBoldDuotone as SiBaseballBoldDuotone };
export default BaseballBoldDuotone;
export type { BaseballBoldDuotoneProps };
