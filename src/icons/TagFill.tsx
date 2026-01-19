import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TagFillProps = Omit<IconBaseProps, 'children'>;

const TagFill = memo(
  forwardRef<SVGSVGElement, TagFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.67 2c.45 0 .83 0 1.2.08a3 3 0 0 1 1.33.71l.44.44.02.02 6.28 6.28q.59.57.97 1 .4.45.61 1.04a3 3 0 0 1 0 1.86q-.2.59-.61 1.03-.38.45-.97 1.01l-5.47 5.47q-.57.59-1 .97-.45.4-1.04.61a3 3 0 0 1-1.86 0q-.59-.2-1.03-.61-.45-.38-1.01-.97l-6.3-6.3c-.31-.3-.59-.57-.79-.9a3 3 0 0 1-.36-.87C2 12.5 2 12.12 2 11.67V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3Q5.4 1.99 6.2 2zM7.75 6a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TagFill.displayName = 'TagFill';

// Triple export pattern (lucide-react style)
export { TagFill, TagFill as TagFillIcon, TagFill as SiTagFill };
export type { TagFillProps };
