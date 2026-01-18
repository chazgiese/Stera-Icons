import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AwardStarBoldProps = Omit<IconBaseProps, 'children'>;

const AwardStarBold = memo(
  forwardRef<SVGSVGElement, AwardStarBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.75 1.82a1.36 1.36 0 0 1 2.5 0L14.62 5l3.46.32a1.36 1.36 0 0 1 .77 2.37l-2.6 2.28.76 3.37c.26 1.17-1 2.07-2.02 1.47L13 13.63V17h.2a4 4 0 0 1 3.8 4h.5a1 1 0 0 1 0 2h-11a1 1 0 0 1 0-2H7a4 4 0 0 1 3.8-4h.2v-3.37l-1.99 1.18c-1.02.6-2.28-.3-2.02-1.47l.77-3.37L5.15 7.7c-.9-.8-.41-2.26.77-2.37L9.38 5zM11 19a2 2 0 0 0-2 2h6a2 2 0 0 0-2-2zm.06-12.86c-.2.46-.63.77-1.12.81l-2.35.22 1.77 1.55c.38.33.54.83.43 1.32l-.52 2.3 2.04-1.21.16-.08c.34-.15.72-.15 1.06 0l.16.08 2.04 1.2-.52-2.3c-.11-.48.05-.98.43-1.31l1.77-1.55-2.35-.22c-.5-.04-.93-.35-1.12-.81L12 3.97z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarBold.displayName = 'AwardStarBold';

export { AwardStarBold };
export type { AwardStarBoldProps };
