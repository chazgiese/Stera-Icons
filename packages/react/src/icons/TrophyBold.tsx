import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TrophyBoldProps = Omit<IconBaseProps, 'children'>;

const TrophyBold = memo(
  forwardRef<SVGSVGElement, TrophyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.5 1a3 3 0 0 1 2.97 2.5h2.05a2.25 2.25 0 0 1 2.22 2.62l-.45 2.72a5 5 0 0 1-2.36 3.47l-2.73 1.64q-.6 1.64-1.6 3.38A4 4 0 0 1 18 21v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1a4 4 0 0 1 2.4-3.67 21 21 0 0 1-1.6-3.38L4.07 12.3A5 5 0 0 1 1.7 8.84l-.45-2.72A2.25 2.25 0 0 1 3.48 3.5h2.05A3 3 0 0 1 8.5 1zM10 19a2 2 0 0 0-2 2h8a2 2 0 0 0-2-2zM8.5 3c-.55 0-1.01.45-1.02 1-.03 4.18.05 8.25 3.06 13h2.92c3-4.75 3.1-8.82 3.05-13 0-.55-.46-1-1.01-1zM3.48 5.5a.25.25 0 0 0-.25.3l.45 2.71A3 3 0 0 0 5.1 10.6l.9.54c-.4-1.95-.5-3.82-.52-5.63zm15.04 0c-.01 1.8-.11 3.68-.52 5.63l.9-.54a3 3 0 0 0 1.42-2.08l.45-2.72a.25.25 0 0 0-.25-.29z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrophyBold.displayName = 'TrophyBold';

// Triple export pattern (lucide-react style)
export { TrophyBold, TrophyBold as TrophyBoldIcon, TrophyBold as SiTrophyBold };
export type { TrophyBoldProps };
