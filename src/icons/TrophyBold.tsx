import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrophyBoldProps = Omit<IconBaseProps, 'children'>;

const TrophyBold = memo(
  forwardRef<SVGSVGElement, TrophyBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="trophy-bold" {...props}>
      <path fillRule="evenodd" d="M15.15 2c1.36 0 2.5.97 2.76 2.25h1.76a2.12 2.12 0 0 1 2.1 2.47l-.41 2.45a4.6 4.6 0 0 1-2.17 3.2l-2.43 1.45q-.52 1.43-1.38 2.93a3.7 3.7 0 0 1 2.12 3.35v.9a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-.9a3.7 3.7 0 0 1 2.12-3.35q-.86-1.5-1.38-2.93l-2.43-1.46a4.6 4.6 0 0 1-2.17-3.19l-.4-2.45a2.13 2.13 0 0 1 2.09-2.47h1.76A2.8 2.8 0 0 1 8.85 2zM10.2 18.4c-.9 0-1.64.7-1.7 1.6h7a1.7 1.7 0 0 0-1.7-1.6zM8.85 4c-.44 0-.8.36-.81.8-.04 3.75.04 7.37 2.7 11.6h2.52c2.66-4.23 2.74-7.85 2.7-11.6 0-.44-.37-.8-.81-.8zM4.33 6.25a.12.12 0 0 0-.13.15l.41 2.45a2.6 2.6 0 0 0 1.23 1.8l.62.37c-.33-1.66-.41-3.24-.43-4.77zm13.64 0c-.02 1.53-.1 3.11-.43 4.77l.62-.37a2.6 2.6 0 0 0 1.23-1.8l.4-2.45a.12.12 0 0 0-.12-.15z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyBold.displayName = 'TrophyBold';

// Triple export pattern (lucide-react style)
export { TrophyBold, TrophyBold as TrophyBoldIcon, TrophyBold as SiTrophyBold };
export default TrophyBold;
export type { TrophyBoldProps };
