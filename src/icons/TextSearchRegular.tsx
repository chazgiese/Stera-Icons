import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchRegularProps = Omit<IconBaseProps, 'children'>;

const TextSearchRegular = memo(
  forwardRef<SVGSVGElement, TextSearchRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-search" {...props}>
      <path fillRule="evenodd" d="M15.5 9.25a4.25 4.25 0 0 1 3.63 6.46l2.08 2.08a1 1 0 1 1-1.42 1.42l-2.08-2.08q-.98.61-2.21.62a4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
        <path d="M8 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM8 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextSearchRegular.displayName = 'TextSearchRegular';

// Triple export pattern (lucide-react style)
export { TextSearchRegular, TextSearchRegular as TextSearchRegularIcon, TextSearchRegular as SiTextSearchRegular };
export default TextSearchRegular;
export type { TextSearchRegularProps };
