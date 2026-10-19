import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CodeCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CodeCircleBold = memo(
  forwardRef<SVGSVGElement, CodeCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.03 7.76c.13-.54.68-.86 1.21-.73.54.13.86.68.73 1.21l-2 8c-.13.54-.68.86-1.21.73-.54-.13-.86-.68-.73-1.21zM7.8 9.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L7.92 12l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-2-2c-.39-.38-.39-1.02 0-1.4zM14.8 9.3c.38-.4 1.02-.4 1.4 0l2 2c.4.38.4 1.02 0 1.4l-2 2c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l1.29-1.3-1.3-1.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleBold.displayName = 'CodeCircleBold';

// Triple export pattern
export { CodeCircleBold, CodeCircleBold as CodeCircleBoldIcon, CodeCircleBold as SiCodeCircleBold };
export default CodeCircleBold;
export type { CodeCircleBoldProps };
