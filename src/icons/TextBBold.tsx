import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBBoldProps = Omit<IconBaseProps, 'children'>;

const TextBBold = memo(
  forwardRef<SVGSVGElement, TextBBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-bold" {...props}>
      <path fillRule="evenodd" d="M12 3a5 5 0 0 1 3.74 8.31A5 5 0 0 1 14 21H8.84q-.72 0-1.24-.03-.55-.03-1.08-.27-.8-.42-1.22-1.22a3 3 0 0 1-.27-1.08q-.04-.52-.03-1.24V6.84q0-.73.03-1.24.03-.55.27-1.08.42-.8 1.22-1.22c.35-.18.72-.24 1.08-.27q.52-.04 1.24-.03zM8.84 13c-.51 0-.84 0-1.08.02a1 1 0 0 0-.34.07 1 1 0 0 0-.34.33 1 1 0 0 0-.06.34C7 14 7 14.33 7 14.84v2.32c0 .51 0 .84.02 1.08s.05.3.06.34q.13.22.34.34c.03 0 .1.04.34.06s.57.02 1.08.02H14a3 3 0 1 0 0-6zm0-8c-.51 0-.84 0-1.08.02a1 1 0 0 0-.34.06 1 1 0 0 0-.34.34 1 1 0 0 0-.06.34C7 6 7 6.33 7 6.84v2.32c0 .51 0 .84.02 1.08s.05.3.06.34q.13.22.34.33c.03.02.1.05.34.07s.57.02 1.08.02H12a3 3 0 1 0 0-6z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBBold.displayName = 'TextBBold';

// Triple export pattern (lucide-react style)
export { TextBBold, TextBBold as TextBBoldIcon, TextBBold as SiTextBBold };
export default TextBBold;
export type { TextBBoldProps };
