import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MedalBoldProps = Omit<IconBaseProps, 'children'>;

const MedalBold = memo(
  forwardRef<SVGSVGElement, MedalBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.8 1q.81 0 1.4.03c.39.03.78.1 1.16.3a3 3 0 0 1 1.31 1.3c.2.39.27.78.3 1.17q.04.59.03 1.4v1.82c0 .65.01 1.2-.16 1.72a3 3 0 0 1-.7 1.12c-.38.4-.88.63-1.46.92l-2.99 1.5A5.99 5.99 0 0 1 12 23a6 6 0 0 1-3.7-10.73l-2.98-1.5c-.58-.28-1.08-.52-1.46-.9a3 3 0 0 1-.7-1.13C3 8.23 3 7.67 3 7.02V5.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q6.4.99 7.2 1zM12 13a4 4 0 1 0-.01 7.99A4 4 0 0 0 12 13m-3-2.62 1.58.79.32-.07.06-.01a6 6 0 0 1 1.76-.05h.03l.29.05.06.01.31.07h.01l1.58-.79V3H9zM7 3c-.47 0-.78 0-1.03.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42C5 4.25 5 4.62 5 5.2v1.82c0 .8.01.95.05 1.07a1 1 0 0 0 .23.37c.1.1.23.18.94.53l.78.4zm10 6.38.78-.39c.71-.35.85-.44.93-.53a1 1 0 0 0 .24-.37c.04-.12.05-.28.05-1.07V5.2c0-.58 0-.95-.02-1.23a1 1 0 0 0-.09-.42 1 1 0 0 0-.44-.44 1 1 0 0 0-.42-.09Q17.67 3 17 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalBold.displayName = 'MedalBold';

// Triple export pattern (lucide-react style)
export { MedalBold, MedalBold as MedalBoldIcon, MedalBold as SiMedalBold };
export default MedalBold;
export type { MedalBoldProps };
