/* ============================================================================
 * Feed Builder
 * ============================================================================
 * Composes heterogeneous content into a unified, ordered feed.
 */

import type { TextPost } from "../content-models/textpost";


/* --------------------------------------------------------------------------
 * Feed builder
 * -------------------------------------------------------------------------- */

export function buildFeed(
    textPost: TextPost[],
) {
    const textItems: TextPost[] = textPost.map((post) => ({
        id: post.id,
        slug: post.slug,
        visibility: post.visibility,
        createdAt: post.createdAt,
        content: post.content,
        title: post.title
    }));

    /* --------------------------------------------------------------------------
    
     * Not used yet
    
        const projectEntryItems: ProjectEntryFeedItem[] = projects.flatMap(
            (project) =>
                project.entries.map((entry) => ({
                    id: `${project.id}:${entry.id}`,
                    type: "project-entry",
                    projectSlug: project.slug,
                    entryId: entry.id,
                    createdAt: entry.createdAt,
                    blocks: entry.blocks
                }))
        );
    
     * -------------------------------------------------------------------------- */


    return [...textItems].sort(
        (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}
