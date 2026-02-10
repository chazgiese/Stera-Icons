import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TagBoldProps = Omit<IconBaseProps, 'children'>;

const TagBold = memo(
  forwardRef<SVGSVGElement, TagBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag-bold" {...props}>
      <path fill="currentColor" d="M8.5 6.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M11.66 2.75c.44 0 .82 0 1.2.08q.46.12.86.36c.33.2.6.48.9.8l4.44 4.43q.89.86 1.42 1.48.57.63.83 1.38a4 4 0 0 1 0 2.48 4 4 0 0 1-.83 1.38q-.53.62-1.42 1.48l-2.44 2.44q-.86.89-1.48 1.42a4 4 0 0 1-1.38.83 4 4 0 0 1-2.48 0 4 4 0 0 1-1.38-.83q-.62-.53-1.48-1.42l-4.44-4.43c-.31-.32-.59-.58-.79-.91a3 3 0 0 1-.36-.87c-.09-.37-.08-.75-.08-1.2v-4.7q0-.81.03-1.4c.03-.39.1-.78.3-1.16a3 3 0 0 1 1.3-1.31c.39-.2.78-.27 1.17-.3q.59-.04 1.4-.03zm-4.71 2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v4.7c0 .54 0 .65.03.74q.03.16.12.28c.05.08.12.16.5.54l4.43 4.44c.6.6 1.02 1.02 1.36 1.3.34.3.54.4.71.46a2 2 0 0 0 1.24 0c.16-.05.37-.17.7-.45.35-.3.76-.7 1.37-1.31l2.44-2.44c.6-.61 1.02-1.02 1.3-1.37.3-.33.4-.54.46-.7a2 2 0 0 0 0-1.24 2 2 0 0 0-.45-.7c-.3-.35-.7-.76-1.31-1.37L13.2 5.4a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11c-.1-.02-.2-.03-.73-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

TagBold.displayName = 'TagBold';

// Triple export pattern (lucide-react style)
export { TagBold, TagBold as TagBoldIcon, TagBold as SiTagBold };
export default TagBold;
export type { TagBoldProps };
