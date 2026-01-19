import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type AwardStarRegularProps = Omit<IconBaseProps, 'children'>;

const AwardStarRegular = memo(
  forwardRef<SVGSVGElement, AwardStarRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="award-star" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.06 1.76a1.1 1.1 0 0 1 1.88 0l.08.16 1.43 3.31 3.6.34a1.1 1.1 0 0 1 .64 1.93l-2.72 2.38.8 3.52a1.1 1.1 0 0 1-1.65 1.2l-2.37-1.4v4.05H13A3.75 3.75 0 0 1 16.75 21v.25h.75a.75.75 0 0 1 0 1.5h-11a.75.75 0 0 1 0-1.5h.75V21A3.75 3.75 0 0 1 11 17.25h.25v-4.06l-2.37 1.4a1.1 1.1 0 0 1-1.64-1.2l.8-3.51L5.3 7.5a1.1 1.1 0 0 1 .63-1.93l3.61-.34 1.43-3.31zM11 18.75c-1.24 0-2.25 1-2.25 2.25v.25h6.5V21c0-1.24-1-2.25-2.25-2.25zm-.17-12.7a1.1 1.1 0 0 1-.91.65l-2.93.27 2.2 1.94c.31.26.45.68.36 1.07l-.65 2.86 2.54-1.5.13-.06c.27-.12.59-.12.86 0l.14.06 2.53 1.5-.65-2.86c-.09-.4.05-.8.35-1.07l2.21-1.94-2.93-.27c-.4-.03-.75-.29-.91-.66L12 3.34z" clipRule="evenodd" />
    </IconBase>
  ))
);

AwardStarRegular.displayName = 'AwardStarRegular';

// Triple export pattern (lucide-react style)
export { AwardStarRegular, AwardStarRegular as AwardStarRegularIcon, AwardStarRegular as SiAwardStarRegular };
export default AwardStarRegular;
export type { AwardStarRegularProps };
