import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronInwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronInwardBold = memo(
  forwardRef<SVGSVGElement, ChevronInwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M11.3 14.3a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L12 16.42l-5.3 5.3a1 1 0 0 1-1.4-1.42zM17.3 2.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 1 1 1.4-1.4L12 7.58z" />
    </IconBase>
  ))
);

ChevronInwardBold.displayName = 'ChevronInwardBold';

export { ChevronInwardBold };
export type { ChevronInwardBoldProps };
