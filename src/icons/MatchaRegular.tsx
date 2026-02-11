import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MatchaRegularProps = Omit<IconBaseProps, 'children'>;

const MatchaRegular = memo(
  forwardRef<SVGSVGElement, MatchaRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="matcha" {...props}>
      <path fillRule="evenodd" d="M12 3.25c2.53 0 4.85.28 6.56.76.85.24 1.6.53 2.14.89.52.34 1.05.86 1.05 1.6q0 .12-.02.23l-.23 2.19q-.16 1.43-.74 2.7c1.18.88 1.99 2.03 1.99 3.38 0 1.82-1.45 3.26-3.34 4.2A17 17 0 0 1 12 20.76c-2.85 0-5.47-.58-7.4-1.54-1.9-.95-3.35-2.4-3.35-4.21 0-1.35.81-2.5 1.99-3.38a9 9 0 0 1-.74-2.7l-.23-2.2-.02-.22c0-.74.53-1.26 1.05-1.6a8 8 0 0 1 2.14-.89A26 26 0 0 1 12 3.25m8.02 9.69a8.8 8.8 0 0 1-7.22 3.81h-1.6a8.8 8.8 0 0 1-7.22-3.81c-.85.68-1.23 1.4-1.23 2.06 0 .94.78 2 2.51 2.86 1.69.85 4.07 1.39 6.74 1.39s5.05-.54 6.74-1.39c1.73-.86 2.51-1.92 2.51-2.86 0-.66-.38-1.38-1.23-2.06m.02-4.48q-.72.34-1.66.58c-1.7.45-3.94.71-6.38.71s-4.69-.26-6.38-.7q-.94-.25-1.66-.59l.03.3a7.23 7.23 0 0 0 7.21 6.49h1.6a7.25 7.25 0 0 0 7.2-6.5zM12 4.75c-2.44 0-4.62.28-6.16.7q-1.18.34-1.72.7c-.29.2-.35.31-.37.35l.08.12q.11.13.41.3.6.37 1.77.67c1.53.4 3.64.66 5.99.66s4.46-.26 6-.66q1.16-.3 1.76-.67.3-.17.4-.3.09-.1.08-.11V6.5c-.01-.04-.07-.16-.36-.35a6 6 0 0 0-1.72-.7c-1.54-.42-3.72-.7-6.16-.7" clipRule="evenodd" />
    </IconBase>
  ))
);

MatchaRegular.displayName = 'MatchaRegular';

// Triple export pattern (lucide-react style)
export { MatchaRegular, MatchaRegular as MatchaRegularIcon, MatchaRegular as SiMatchaRegular };
export default MatchaRegular;
export type { MatchaRegularProps };
