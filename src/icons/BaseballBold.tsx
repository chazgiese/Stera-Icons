import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BaseballBoldProps = Omit<IconBaseProps, 'children'>;

const BaseballBold = memo(
  forwardRef<SVGSVGElement, BaseballBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="baseball-bold" {...props}>
      <path fill="currentColor" d="M15.45 9.8a1 1 0 0 1 1.4-.21l.72.48a1 1 0 0 1-1.05 1.7l-.85-.57a1 1 0 0 1-.22-1.4M9.59 16.85a1 1 0 0 1 1.62-1.18q.3.42.56.85a1 1 0 0 1-1.7 1.05q-.23-.37-.48-.72M6.1 12.56a1 1 0 0 1 1.38-.33l.85.57a1 1 0 0 1-1.18 1.62l-.72-.49a1 1 0 0 1-.33-1.37M12.23 7.48a1 1 0 0 1 1.7-1.04q.23.36.48.71a1 1 0 0 1-1.62 1.18q-.3-.42-.56-.85" />
        <path fill="currentColor" fillRule="evenodd" d="M4.22 4.22a11 11 0 1 1 15.56 15.56A11 11 0 0 1 4.22 4.22m1.42 1.42a9 9 0 0 0-2.52 4.9l.6.13a1 1 0 1 1-.47 1.95l-.23-.06a8.96 8.96 0 0 0 8.41 8.42l-.05-.23a1 1 0 0 1 1.95-.47l.12.6a9 9 0 0 0 7.43-7.42l-.6-.13a1 1 0 0 1 .46-1.94l.24.05a8.96 8.96 0 0 0-8.41-8.42l.05.24a1 1 0 0 1-1.95.46l-.13-.6a9 9 0 0 0-4.9 2.52" clipRule="evenodd" />
    </IconBase>
  ))
);

BaseballBold.displayName = 'BaseballBold';

// Triple export pattern (lucide-react style)
export { BaseballBold, BaseballBold as BaseballBoldIcon, BaseballBold as SiBaseballBold };
export default BaseballBold;
export type { BaseballBoldProps };
