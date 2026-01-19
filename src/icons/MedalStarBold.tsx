import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedalStarBoldProps = Omit<IconBaseProps, 'children'>;

const MedalStarBold = memo(
  forwardRef<SVGSVGElement, MedalStarBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal-star-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.8 1q.81 0 1.4.03c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v1.82c0 .65.01 1.2-.16 1.72a3 3 0 0 1-.7 1.12c-.38.4-.88.63-1.46.92l-4.13 2.06.07.16 3.46.32c1.18.1 1.67 1.58.77 2.37l-2.6 2.28.76 3.37c.26 1.17-1 2.07-2.02 1.47L12 21.04l-2.99 1.77c-1.02.6-2.28-.3-2.02-1.47l.77-3.37-2.61-2.28c-.9-.8-.41-2.26.77-2.37L9.38 13l.07-.16-4.13-2.06c-.58-.29-1.08-.53-1.46-.92a3 3 0 0 1-.7-1.12C3 8.23 3 7.67 3 7.02V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4.99 7.2 1zm-5.14 11.77-.6 1.37c-.2.46-.63.77-1.12.81l-2.35.22 1.77 1.55c.38.33.54.83.43 1.32l-.52 2.3 2.04-1.21.16-.09q.53-.21 1.06 0l.16.09 2.04 1.2-.52-2.3c-.11-.48.05-.98.43-1.31l1.77-1.55-2.35-.22c-.5-.04-.93-.35-1.12-.81L12 11.97zM9 10.38l1.24.62.51-1.18.05-.1.05-.1.05-.07h.01a1 1 0 0 1 .33-.32l.05-.03.1-.06.07-.03.13-.05.04-.01q.07-.02.16-.03h.02q.19-.03.38 0h.02l.16.03.15.05h.02l.07.04.1.05.06.05.2.16.01.02.1.12.02.02.1.16.05.1.5 1.18 1.25-.62V3H9zM7 3c-.47 0-.78 0-1.03.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C5 4.25 5 4.62 5 5.2v1.82c0 .8.01.95.05 1.07a1 1 0 0 0 .23.37c.1.1.23.18.94.53l.78.4zm10 6.38.78-.39c.71-.35.85-.44.93-.53a1 1 0 0 0 .24-.37c.04-.12.05-.28.05-1.07V5.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09Q17.67 3 17 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalStarBold.displayName = 'MedalStarBold';

// Triple export pattern (lucide-react style)
export { MedalStarBold, MedalStarBold as MedalStarBoldIcon, MedalStarBold as SiMedalStarBold };
export default MedalStarBold;
export type { MedalStarBoldProps };
