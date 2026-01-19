import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextUnderlineRegularProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineRegular = memo(
  forwardRef<SVGSVGElement, TextUnderlineRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline" {...props}>
      <path fill="currentColor" d="M19 21.25a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5zM18 1.25c.41 0 .75.34.75.75v10a6.75 6.75 0 0 1-13.5 0V2a.75.75 0 0 1 1.5 0v10a5.25 5.25 0 1 0 10.5 0V2c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TextUnderlineRegular.displayName = 'TextUnderlineRegular';

// Triple export pattern (lucide-react style)
export { TextUnderlineRegular, TextUnderlineRegular as TextUnderlineRegularIcon, TextUnderlineRegular as SiTextUnderlineRegular };
export type { TextUnderlineRegularProps };
