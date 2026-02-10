import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBFillProps = Omit<IconBaseProps, 'children'>;

const TextBFill = memo(
  forwardRef<SVGSVGElement, TextBFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.5a5.5 5.5 0 0 1 4.53 8.62A5.5 5.5 0 0 1 14 21.5H8.84q-.71 0-1.29-.03c-.38-.03-.82-.1-1.26-.33a3.3 3.3 0 0 1-1.43-1.43c-.23-.44-.3-.88-.33-1.26q-.04-.57-.03-1.3V6.86q0-.73.03-1.3c.03-.38.1-.82.33-1.26l.12-.23q.49-.78 1.31-1.2l.16-.08q.59-.22 1.1-.25.58-.04 1.3-.03zm-3.16 11a15 15 0 0 0-1.2.04l-.1.1-.02.16c-.02.22-.02.52-.02 1.04v2.32a15 15 0 0 0 .04 1.2q.03.06.1.1l.16.02c.22.02.52.02 1.04.02H14a2.5 2.5 0 0 0 0-5zm0-8a15 15 0 0 0-1.2.04l-.1.1-.02.16c-.02.22-.02.52-.02 1.04v2.32a15 15 0 0 0 .04 1.2q.03.06.1.1l.16.02c.22.02.52.02 1.04.02H12a2.5 2.5 0 0 0 0-5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBFill.displayName = 'TextBFill';

// Triple export pattern (lucide-react style)
export { TextBFill, TextBFill as TextBFillIcon, TextBFill as SiTextBFill };
export default TextBFill;
export type { TextBFillProps };
