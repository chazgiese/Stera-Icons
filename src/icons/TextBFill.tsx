import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextBFillProps = Omit<IconBaseProps, 'children'>;

const TextBFill = memo(
  forwardRef<SVGSVGElement, TextBFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.5 1.5a6 6 0 0 1 4.75 9.67A6 6 0 0 1 14.5 22.5H9.2q-.81 0-1.44-.03c-.42-.04-.89-.12-1.35-.35a3.5 3.5 0 0 1-1.53-1.53 4 4 0 0 1-.35-1.35l-.03-.67V6.14q0-.76.03-1.36c.03-.41.1-.86.32-1.3a3.5 3.5 0 0 1 1.63-1.63c.44-.22.89-.29 1.3-.32q.59-.04 1.36-.03zm-3.3 12c-.58 0-.93 0-1.2.02-.23.02-.26.05-.23.03a.5.5 0 0 0-.22.22c.02-.03 0 0-.03.24-.02.26-.02.6-.02 1.19v3.32l.02.47c.02.24.05.27.03.24q.08.15.22.22c-.03-.02 0 0 .24.03.26.02.6.02 1.19.02h5.3a3 3 0 1 0 0-6zm-.06-9c-.55 0-.89 0-1.13.02s-.26.05-.23.03a.5.5 0 0 0-.23.23c.02-.03-.01 0-.03.23s-.02.58-.02 1.13v2.72c0 .55 0 .89.02 1.13s.05.26.03.23q.08.15.23.23c-.03-.02 0 .01.23.03s.58.02 1.13.02h3.36a3 3 0 1 0 0-6z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBFill.displayName = 'TextBFill';

// Triple export pattern (lucide-react style)
export { TextBFill, TextBFill as TextBFillIcon, TextBFill as SiTextBFill };
export default TextBFill;
export type { TextBFillProps };
