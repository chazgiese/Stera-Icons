import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CodeCircleFillProps = Omit<IconBaseProps, 'children'>;

const CodeCircleFill = memo(
  forwardRef<SVGSVGElement, CodeCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m1.79 5.04a1 1 0 0 0-1.25.67l-3 10a1 1 0 0 0 1.92.58l3-10a1 1 0 0 0-.67-1.25M8.7 8.8a1 1 0 0 0-1.42 0l-2.5 2.5a1 1 0 0 0 0 1.42l2.5 2.5a1 1 0 1 0 1.42-1.42L6.9 12l1.8-1.8a1 1 0 0 0 0-1.4m8 0a1 1 0 1 0-1.42 1.42L17.1 12l-1.8 1.8a1 1 0 1 0 1.42 1.4l2.5-2.5a1 1 0 0 0 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

CodeCircleFill.displayName = 'CodeCircleFill';

export { CodeCircleFill };
export type { CodeCircleFillProps };
