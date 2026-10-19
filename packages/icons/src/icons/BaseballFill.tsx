import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballFillProps = Omit<IconBaseProps, 'children'>;

const BaseballFill = memo(
  forwardRef<SVGSVGElement, BaseballFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.75 4.75c4-4 10.5-4 14.5 0s4 10.5 0 14.5-10.5 4-14.5 0-4-10.5 0-14.5m15.02 6.23c-.47-.12-.94.17-1.06.64-.1.47.18.94.65 1.06q.42.1.84.16c.48.08.92-.25 1-.72.07-.48-.25-.93-.73-1zm-8.15 7.73c-.47.12-.76.59-.65 1.06q.08.35.14.7c.08.48.53.8 1 .73.48-.08.8-.53.73-1q-.06-.42-.17-.84c-.1-.47-.58-.76-1.05-.65m-1.94-3.4c-.4.29-.48.83-.2 1.22q.22.3.4.6c.25.41.8.54 1.2.29.42-.25.55-.8.3-1.2q-.22-.37-.48-.71c-.28-.4-.83-.48-1.22-.2m6.86-5.83c-.4-.28-.94-.2-1.23.2-.28.39-.2.93.2 1.22l.35.24.36.23c.4.26.95.13 1.2-.28s.12-.96-.29-1.2l-.3-.2zm-8.76 3.15c-.4-.26-.95-.13-1.2.28s-.12.96.29 1.2l.3.2.3.2c.39.3.93.2 1.22-.19s.2-.93-.2-1.22l-.35-.24zm5.13-6.05c-.4.25-.54.8-.29 1.2q.23.37.48.71c.28.4.83.48 1.22.2.4-.29.48-.83.2-1.22q-.22-.3-.4-.6c-.25-.41-.8-.54-1.2-.29M11.9 2.8c-.48.08-.8.53-.73 1q.06.42.17.84c.1.47.58.76 1.05.65.47-.12.76-.59.65-1.06q-.09-.35-.14-.7c-.08-.48-.53-.8-1-.73M3.8 11.16c-.48-.08-.92.25-1 .72-.07.48.25.93.73 1l.7.14c.47.12.94-.17 1.06-.64.11-.47-.18-.95-.65-1.06q-.42-.1-.84-.16" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballFill.displayName = 'BaseballFill';

// Triple export pattern
export { BaseballFill, BaseballFill as BaseballFillIcon, BaseballFill as SiBaseballFill };
export default BaseballFill;
export type { BaseballFillProps };
