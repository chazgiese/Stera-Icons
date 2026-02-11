import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalStarRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedalStarRegularDuotone = memo(
  forwardRef<SVGSVGElement, MedalStarRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="medal-star-duotone" {...props}>
      <path fillRule="evenodd" d="M16.8 1.25q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v1.82c0 .67 0 1.18-.15 1.64q-.2.59-.64 1.03c-.34.35-.8.57-1.4.87l-4.33 2.16-.6-1.38 1.62-.8V2.75h-6.5v7.79l1.62.8-.32.73-.28.65-4.34-2.16c-.59-.3-1.05-.52-1.4-.87q-.43-.45-.63-1.03c-.16-.46-.15-.97-.15-1.64V5.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zm-9.6 1.5c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.82a4 4 0 0 0 .07 1.15q.1.27.29.47a4 4 0 0 0 1 .57l1.14.58V2.75zm9.55 7.04 1.15-.58a4 4 0 0 0 1-.57q.19-.2.28-.47a4 4 0 0 0 .07-1.15V5.2q0-.83-.02-1.25a1 1 0 0 0-.12-.52 1.3 1.3 0 0 0-.54-.54 1 1 0 0 0-.52-.12c-.3-.02-.68-.02-1.25-.02h-.05z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M11.06 9.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2L12 20.74 8.88 22.6a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 15.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31zm-.23 4.28a1.1 1.1 0 0 1-.91.66l-2.93.27 2.2 1.94c.31.26.45.68.36 1.07l-.65 2.86 2.54-1.5.13-.06c.27-.12.59-.12.86 0l.14.06 2.53 1.5-.65-2.86c-.09-.4.05-.8.35-1.07l2.21-1.94-2.93-.27a1.1 1.1 0 0 1-.91-.66L12 11.34z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalStarRegularDuotone.displayName = 'MedalStarRegularDuotone';

// Triple export pattern (lucide-react style)
export { MedalStarRegularDuotone, MedalStarRegularDuotone as MedalStarRegularDuotoneIcon, MedalStarRegularDuotone as SiMedalStarRegularDuotone };
export default MedalStarRegularDuotone;
export type { MedalStarRegularDuotoneProps };
