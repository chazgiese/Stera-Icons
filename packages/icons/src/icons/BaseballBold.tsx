import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballBoldProps = Omit<IconBaseProps, 'children'>;

const BaseballBold = memo(
  forwardRef<SVGSVGElement, BaseballBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.6 15.21c.45-.32 1.08-.22 1.4.22l.48.72c.3.47.14 1.09-.33 1.38s-1.09.14-1.37-.34q-.2-.3-.4-.58c-.32-.45-.22-1.07.23-1.4M15.21 9.6c.33-.44.95-.54 1.4-.22l.29.2.3.2c.47.28.62.9.33 1.37-.3.47-.9.62-1.38.33l-.36-.23-.36-.25c-.44-.32-.54-.95-.22-1.4M6.47 12.85c.3-.47.9-.62 1.38-.33l.36.23.36.25c.44.32.54.95.22 1.4s-.95.54-1.4.22l-.29-.2-.3-.2c-.47-.28-.61-.9-.33-1.37M12.52 7.85c-.29-.47-.14-1.09.33-1.38s1.09-.14 1.38.34q.18.3.39.58c.32.45.22 1.07-.22 1.4-.45.32-1.08.22-1.4-.22z" />
        <path fillRule="evenodd" d="M4.58 4.58c4.1-4.1 10.75-4.1 14.85 0s4.1 10.74 0 14.84-10.75 4.1-14.85 0-4.1-10.74 0-14.84m1.41 1.41c-1.41 1.41-2.22 3.2-2.43 5.04h.26q.43.07.85.17c.54.13.87.67.74 1.2-.13.54-.67.87-1.2.75q-.33-.09-.65-.13C3.78 14.84 4.6 16.6 6 18s3.17 2.2 4.99 2.43l-.13-.64c-.13-.54.2-1.08.74-1.2.54-.14 1.08.2 1.2.73q.1.42.18.85v.26c1.84-.2 3.63-1.02 5.04-2.43s2.22-3.2 2.43-5.04h-.26q-.43-.07-.85-.17c-.53-.13-.87-.67-.74-1.2.13-.54.67-.87 1.2-.75q.32.08.65.13C20.22 9.16 19.4 7.4 18 6s-3.17-2.2-4.99-2.43l.13.64c.13.54-.2 1.08-.74 1.2-.54.14-1.08-.2-1.2-.73q-.1-.42-.17-.85-.03-.14-.01-.26c-1.84.2-3.63 1.02-5.04 2.43" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballBold.displayName = 'BaseballBold';

// Triple export pattern
export { BaseballBold, BaseballBold as BaseballBoldIcon, BaseballBold as SiBaseballBold };
export default BaseballBold;
export type { BaseballBoldProps };
