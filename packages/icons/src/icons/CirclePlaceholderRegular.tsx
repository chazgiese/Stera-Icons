import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CirclePlaceholderRegularProps = Omit<IconBaseProps, 'children'>;

const CirclePlaceholderRegular = memo(
  forwardRef<SVGSVGElement, CirclePlaceholderRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.55 1.85c3.08-.43 6.33.53 8.7 2.9s3.34 5.62 2.9 8.7c-.21 1.47-.74 2.92-1.6 4.2q-.55.85-1.3 1.6t-1.6 1.3c-1.29.86-2.73 1.39-4.2 1.6-3.08.44-6.33-.53-8.7-2.9s-3.34-5.62-2.9-8.7c.21-1.47.74-2.91 1.6-4.2q.55-.85 1.3-1.6t1.6-1.3c1.29-.86 2.73-1.39 4.2-1.6M3.26 12.38c.1 2.11.94 4.2 2.55 5.8 1.61 1.62 3.7 2.47 5.8 2.56zm.97-4.4q-.6 1.16-.83 2.42l10.2 10.2q1.26-.23 2.42-.83zm2.45-2.93q-.46.35-.87.76t-.76.87l12.27 12.27q.46-.36.87-.76.4-.42.76-.87zM10.4 3.4q-1.26.23-2.42.83l11.8 11.8q.59-1.18.82-2.43zm10.34 8.22c-.1-2.11-.94-4.2-2.55-5.8-1.61-1.62-3.7-2.47-5.8-2.56z" clipRule="evenodd" />
    </IconBase>
  ))
);

CirclePlaceholderRegular.displayName = 'CirclePlaceholderRegular';

// Triple export pattern
export { CirclePlaceholderRegular, CirclePlaceholderRegular as CirclePlaceholderRegularIcon, CirclePlaceholderRegular as SiCirclePlaceholderRegular };
export default CirclePlaceholderRegular;
export type { CirclePlaceholderRegularProps };
