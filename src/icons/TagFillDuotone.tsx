import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TagFillDuotone = memo(
  forwardRef<SVGSVGElement, TagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.66 2.75c.44 0 .82 0 1.2.08q.46.12.86.36c.33.2.6.48.9.8l4.44 4.43q.89.86 1.42 1.48.57.63.83 1.38a4 4 0 0 1 0 2.48 4 4 0 0 1-.83 1.38q-.53.62-1.42 1.48l-2.44 2.44q-.86.89-1.48 1.42a4 4 0 0 1-1.38.83 4 4 0 0 1-2.48 0 4 4 0 0 1-1.38-.83q-.62-.53-1.48-1.42l-4.44-4.43c-.31-.32-.59-.58-.79-.91a3 3 0 0 1-.36-.87c-.09-.37-.08-.75-.08-1.2v-4.7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-3.16 4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M8.5 6.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
    </IconBase>
  ))
);

TagFillDuotone.displayName = 'TagFillDuotone';

// Triple export pattern (lucide-react style)
export { TagFillDuotone, TagFillDuotone as TagFillDuotoneIcon, TagFillDuotone as SiTagFillDuotone };
export default TagFillDuotone;
export type { TagFillDuotoneProps };
